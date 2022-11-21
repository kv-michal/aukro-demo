import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() active: boolean = false;
  @Output() activeChange = new EventEmitter<boolean>();

  toggle(): void {
    this.active = !this.active;
    this.activeChange.emit(this.active);
  }
}
