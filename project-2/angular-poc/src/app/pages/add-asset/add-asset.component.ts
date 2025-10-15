import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetService, Asset } from '../../services/asset.service';

@Component({
  selector: 'app-add-asset',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
})
export class AddAssetComponent {
  newAsset: Partial<Asset> = {
    name: '',
    category: '',
    image: '',
    status: 'Available',
  };

  constructor(private assetService: AssetService) {}

  addAsset() {
    if (this.newAsset.name && this.newAsset.category && this.newAsset.image) {
      this.assetService.addAsset(this.newAsset as Asset);
      this.newAsset = { name: '', category: '', image: '', status: 'Available' };
      alert('✅ Asset added successfully!');
    } else {
      alert('⚠️ Please fill all fields before adding.');
    }
  }
}
