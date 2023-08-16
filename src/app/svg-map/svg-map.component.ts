import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent implements AfterViewInit {
  @ViewChild('svg') svgElement!: ElementRef;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    const paths = this.svgElement.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('click', () => {
        const pathID = path.getAttribute('id') as string;
        console.log(`Path ID: ${pathID}`);

        this.getData(pathID)
      })
    });
  }

  private getData(id: string) {
    const url: string = `http://api.worldbank.org/v2/country/${id}?format=json`
    this.http.get(url).subscribe(response => console.log('API Response:', response))
  }
}
