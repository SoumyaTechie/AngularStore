import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssetService, Asset } from '../../services/asset.service';

@Component({
  selector: 'app-edit-asset',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss'],
})
export class EditAssetComponent {
  @Input() asset!: Asset;
  @Output() close = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();

  constructor(private assetService: AssetService) {}

  saveChanges() {
    this.assetService.updateAsset(this.asset);
    alert('✅ Asset updated successfully!');
    this.updated.emit();
  }

  cancel() {
    this.close.emit();
  }
}
