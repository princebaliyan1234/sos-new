#!/usr/bin/env python3
"""
Backend API Testing Script
Tests all backend endpoints and MongoDB connectivity
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://silenceofscribes.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_api_connectivity():
    """Test basic API connectivity"""
    print("🔍 Testing API Connectivity...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"   Status Code: {response.status_code}")
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ Root endpoint working correctly")
                return True
            else:
                print(f"   ❌ Unexpected response: {data}")
                return False
        else:
            print(f"   ❌ API not responding correctly (Status: {response.status_code})")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Connection failed: {str(e)}")
        return False

def test_mongodb_connection():
    """Test MongoDB connection via status endpoints"""
    print("\n🔍 Testing MongoDB Connection...")
    
    # Test POST /api/status (create)
    test_data = {
        "client_name": f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    }
    
    try:
        print("   Testing POST /api/status...")
        response = requests.post(f"{API_BASE}/status", 
                               json=test_data, 
                               headers={"Content-Type": "application/json"},
                               timeout=10)
        
        print(f"   POST Status Code: {response.status_code}")
        print(f"   POST Response: {response.text}")
        
        if response.status_code == 200:
            created_data = response.json()
            if "id" in created_data and "timestamp" in created_data:
                print("   ✅ POST /api/status working - MongoDB write successful")
                post_success = True
            else:
                print("   ❌ POST response missing required fields")
                post_success = False
        else:
            print(f"   ❌ POST failed with status {response.status_code}")
            post_success = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ POST request failed: {str(e)}")
        post_success = False
    
    # Test GET /api/status (read)
    try:
        print("   Testing GET /api/status...")
        response = requests.get(f"{API_BASE}/status", timeout=10)
        
        print(f"   GET Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   GET Response: Found {len(data)} status checks")
            if isinstance(data, list):
                print("   ✅ GET /api/status working - MongoDB read successful")
                get_success = True
            else:
                print("   ❌ GET response not a list")
                get_success = False
        else:
            print(f"   ❌ GET failed with status {response.status_code}")
            get_success = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ GET request failed: {str(e)}")
        get_success = False
    
    return post_success and get_success

def test_cors_headers():
    """Test CORS configuration"""
    print("\n🔍 Testing CORS Headers...")
    try:
        response = requests.options(f"{API_BASE}/", timeout=10)
        headers = response.headers
        
        print(f"   OPTIONS Status Code: {response.status_code}")
        
        cors_headers = [
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Methods',
            'Access-Control-Allow-Headers'
        ]
        
        cors_working = True
        for header in cors_headers:
            if header in headers:
                print(f"   ✅ {header}: {headers[header]}")
            else:
                print(f"   ❌ Missing {header}")
                cors_working = False
        
        return cors_working
        
    except requests.exceptions.RequestException as e:
        print(f"   ❌ CORS test failed: {str(e)}")
        return False

def test_error_handling():
    """Test error handling for invalid endpoints"""
    print("\n🔍 Testing Error Handling...")
    try:
        response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
        print(f"   Invalid endpoint status: {response.status_code}")
        
        if response.status_code == 404:
            print("   ✅ 404 handling working correctly")
            return True
        else:
            print(f"   ❌ Expected 404, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Error handling test failed: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING")
    print("=" * 60)
    print(f"Testing Backend URL: {BACKEND_URL}")
    print(f"API Base URL: {API_BASE}")
    print("=" * 60)
    
    # Run all tests
    tests = [
        ("API Connectivity", test_api_connectivity),
        ("MongoDB Connection", test_mongodb_connection),
        ("CORS Headers", test_cors_headers),
        ("Error Handling", test_error_handling)
    ]
    
    results = {}
    for test_name, test_func in tests:
        results[test_name] = test_func()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name:.<30} {status}")
        if result:
            passed += 1
    
    print("-" * 60)
    print(f"Total: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 ALL TESTS PASSED - Backend is working correctly!")
        return 0
    else:
        print("⚠️  SOME TESTS FAILED - Backend needs attention")
        return 1

if __name__ == "__main__":
    sys.exit(main())