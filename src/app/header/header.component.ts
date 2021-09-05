import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  hereSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  @ViewChild('openme') openme: ElementRef;
  disB = false;
  dis = "block";
  meclick() {
    this.disB = !this.disB;
    this.dis = this.disB ? "block" : "none";
    this.renderer.setStyle(this.openme.nativeElement, 'display', this.dis);

  }
}
