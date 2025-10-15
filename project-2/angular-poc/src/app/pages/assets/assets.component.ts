import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService, Asset } from '../../services/asset.service';
import { AssetCardComponent } from '../../components/asset-card/asset-card.component';
import { ReusableModalComponent } from '../../components/reusable-modal/reusable-modal.component';
import { EditAssetComponent } from "../../components/edit-asset/edit-asset.component";

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [CommonModule, AssetCardComponent, ReusableModalComponent, EditAssetComponent],
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  assets: Asset[] = [];
  selectedAsset: Asset | null = null;
  editingAsset: Asset | null = null;
  showModal = false;

  constructor(private assetService: AssetService) {}

  ngOnInit() {
    this.assets = this.assetService.getAssets();
  }

  handleView(asset: Asset) {
    this.selectedAsset = asset;
    this.showModal = true;
  }
 handleEdit(index: number) {
    this.editingAsset = { ...this.assets[index] }; // create editable copy
  }


  handleDelete(index: number) {
    this.assetService.deleteAsset(index);
    this.assets = this.assetService.getAssets(); // refresh after delete
  }
  closeEditForm() {
    this.editingAsset = null;
  }

refreshAssets() {
  const savedAssets = JSON.parse(localStorage.getItem('assets') || '[]');
  this.assets = savedAssets;
  this.editingAsset = null;
}
}

