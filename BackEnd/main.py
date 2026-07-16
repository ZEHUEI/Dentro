"""
This is the backend with FAST API
"""
from contextlib import nullcontext

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:3000",  # React CRA
    "http://localhost:5173",  # Vite
    "https://your-frontend.vercel.app"  # Production frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Yahoo Finance API"}


@app.get("/stock/{ticker}")
def get_stock(ticker: str):
    stock = yf.Ticker(ticker)
    info = stock.info

    return {
        "ticker": ticker.upper(),
        "name": info.get("longName"),
        "current_price": info.get("currentPrice"),
        "market_cap": info.get("marketCap"),
    }

"""
get avms, get info firebase, GCP
"""

@app.get("/stock/{32avg}")
def get_32(ticker: str):
    return nullcontext

"""
get login firebase, buckets
"""

@app.get("/login")
def login():
    return nullcontext

