import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asset } from '../../services/asset.service';

@Component({
  selector: 'app-asset-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss'],
})
export class AssetCardComponent {
  @Input() asset!: Asset;
  @Input() index!: number;
  @Output() view = new EventEmitter<Asset>();
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onView() {
    this.view.emit(this.asset);
  }

  onEdit() {
    this.edit.emit(this.index);
  }

  onDelete() {
    if (confirm(`Delete ${this.asset.name}?`)) {
      this.delete.emit(this.index);
    }
  }
}
