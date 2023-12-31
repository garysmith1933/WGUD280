import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})

export class SvgMapComponent implements AfterViewInit {
  @ViewChild('svg') svgElement!: ElementRef;

  constructor(private http: HttpClient, private dataService: DataService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    const paths = this.svgElement.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('click', () => {
        const pathID = path.getAttribute('id') as string;
         // the id is just the abbreviation for the country name
        this.getData(pathID)
      })
    });
  }

  private getData(countryName: string) {
    const url: string = `https://api.worldbank.org/v2/country/${countryName}?format=json`
    this.http.get<any[][]>(url).subscribe(response => {
      const data = response[1][0]
      this.dataService.setApiData(data);

      this.cdr.detectChanges();
    },

    (error: Error) => {
      console.log(error)
    })
  }
}
