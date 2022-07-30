import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  
  loading = false;
  loadingSubscription: Subscription;

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    this.loadingSubscription = this.loader.loadingStatus.subscribe((value: boolean) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
