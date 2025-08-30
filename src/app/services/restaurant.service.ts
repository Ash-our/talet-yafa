// firebaseService.js
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";

class FirebaseService {
  /**
   * Get all restaurants
   */
  async getAllRestaurants() {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, "restaurants"));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      throw error;
    }
  }

  /**
   * Get a single restaurant by ID
   * @param {string} restaurantId 
   */
  async getRestaurantById(restaurantId: any) {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `restaurants/${restaurantId}`));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error fetching restaurant ${restaurantId}:`, error);
      throw error;
    }
  }

  /**
   * Get all categories for a restaurant
   * @param {string} restaurantId 
   */
  async getCategories(restaurantId: any) {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, `restaurants/${restaurantId}/menu/categories`));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error fetching categories for ${restaurantId}:`, error);
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();
