import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asset } from '../../services/asset.service';

@Component({
  selector: 'app-asset-details-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-details-modal.component.html',
  styleUrls: ['./asset-details-modal.component.scss'],
})
export class AssetDetailsModalComponent {
  @Input() asset!: Asset | null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
