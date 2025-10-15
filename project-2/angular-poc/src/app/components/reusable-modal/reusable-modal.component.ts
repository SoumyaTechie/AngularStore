import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reusable-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.scss'],
})
export class ReusableModalComponent {
  @Input() isOpen = false;
  @Input() data: { [key: string]: any } | null = null;
  @Input() title = 'Details';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
