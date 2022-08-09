import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // Check if screen size is below what is considered a mobile size
  public isMobileSize: boolean;
  // Check if the scrollbar is mobile sized
  public get isMobileScrollbar(): boolean { return this.checkScrollbarSize() };

  private subscription: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.subscription = this.breakpointObserver.observe('(max-width: 767px)').subscribe((result) => {
      this.isMobileSize = result.matches;
    });    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }

  checkScrollbarSize(): boolean {
    var scrollbox = document.createElement('div');
    scrollbox.style.overflow = 'scroll';
    document.body.appendChild(scrollbox);

    var scrollWidth = scrollbox.offsetWidth - scrollbox.clientWidth;

    document.body.removeChild(scrollbox);

    return scrollWidth == 0;
  }
}
