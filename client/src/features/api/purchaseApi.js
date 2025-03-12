import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://exe-wifm.onrender.com/api/v1/purchase";

const getToken = () => localStorage.getItem("token");

// Hàm gọi API để lấy chi tiết khóa học
export const getCourseDetailWithStatus = async (courseId) => {
  try {
    const response = await fetch(`${API_URL}/course/${courseId}/detail-with-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
};

// Hàm gọi API để tạo session checkout
export const createCheckoutSession = async (courseId) => {
  try {
    const response = await fetch(`${API_URL}/checkout/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ courseId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
};

// Hàm gọi API để lấy danh sách khóa học đã mua
export const getPurchasedCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
};


