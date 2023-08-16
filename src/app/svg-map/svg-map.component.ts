import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent implements AfterViewInit {
  @ViewChild('svg') svgElement!: ElementRef;

  ngAfterViewInit(): void {
    const paths = this.svgElement.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('click', () => {
        const pathId = path.getAttribute('id');
        console.log(`Path ID: ${pathId}`);
      })
    });
  }
}
