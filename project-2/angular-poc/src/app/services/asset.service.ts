import { Injectable } from '@angular/core';

export interface Asset {
  id: number;
  name: string;
  category: string;
  image: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private localStorageKey = 'assets';
  private assets: Asset[] = [];

  constructor() {
    const savedAssets = localStorage.getItem(this.localStorageKey);
    this.assets = savedAssets ? JSON.parse(savedAssets) : [
      {
        id: 1,
        name: 'Laptop',
        category: 'Electronics',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920330.png',
        status: 'Available',
      },
      {
        id: 2,
        name: 'Projector',
        category: 'Office Equipment',
        image: 'https://cdn-icons-png.flaticon.com/512/2920/2920322.png',
        status: 'In Use',
      },
    ];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.assets));
  }

  getAssets(): Asset[] {
    return this.assets;
  }

  addAsset(asset: Asset) {
    asset.id = Date.now();
    this.assets.push(asset);
    this.saveToLocalStorage();
  }

  updateAsset(updatedAsset: Asset) {
    const index = this.assets.findIndex(a => a.id === updatedAsset.id);
    if (index !== -1) {
      this.assets[index] = updatedAsset;
      this.saveToLocalStorage();
    }
  }

  deleteAsset(index: number) {
    this.assets.splice(index, 1);
    this.saveToLocalStorage();
  }
}
