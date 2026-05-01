from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
import os

app = FastAPI()

# MOCK DATA
SHOP_ITEMS = [
    {"id": 1, "name": "Organic Tomatoes", "category": "Vegetables", "price": 4.99, "image": "🍅"},
    {"id": 2, "name": "Mixed Nuts", "category": "Snacks", "price": 6.49, "image": "🥜"},
    {"id": 3, "name": "Fresh Basil", "category": "Herbs", "price": 2.99, "image": "🌿"},
    {"id": 4, "name": "Avocado", "category": "Vegetables", "price": 1.99, "image": "🥑"}
]

COMMUNITY_ITEMS = [
    {"id": 1, "name": "Homemade Granola Bars", "user": "Sarah J.", "type": "Trade", "image": "🍪"},
    {"id": 2, "name": "Fresh Mint Leaves", "user": "Mike T.", "type": "Giveaway", "image": "🌱"}
]

QUOTES = [
    {"id": 1, "text": "Take care of your body. It's the only place you have to live.", "category": "Nutrition"},
    {"id": 2, "text": "The hardest lift of all is lifting your butt off the couch.", "category": "Fitness"},
    {"id": 3, "text": "A healthy outside starts from the inside.", "category": "Motivation"}
]

RECIPES = [
    {"id": 1, "name": "Avocado Toast with Egg", "time": "5 mins", "image": "🍞"},
    {"id": 2, "name": "Berry Protein Smoothie", "time": "5 mins", "image": "🥤"}
]

@app.get("/api/shop")
def get_shop_items():
    return SHOP_ITEMS

@app.get("/api/community")
def get_community_items():
    return COMMUNITY_ITEMS

@app.get("/api/quotes")
def get_quotes():
    return QUOTES

@app.get("/api/recipes")
def get_recipes():
    return RECIPES


# Serve frontend
frontend_dir = os.path.join(os.path.dirname(__file__), '..', 'frontend')
app.mount("/static", StaticFiles(directory=frontend_dir), name="static")

frontend_path = os.path.join(frontend_dir, 'index.html')

@app.get("/", response_class=HTMLResponse)
def read_root():
    if os.path.exists(frontend_path):
        with open(frontend_path, "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>Frontend not found</h1>"

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
