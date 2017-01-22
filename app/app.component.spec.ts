import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent , WelcomeComponent],
      imports: [RouterModule, AppRoutingModule]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('navbar-brand'));
      el = de.nativeElement;
    })

  }));

/*
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('navbar-brand'));
    el = de.nativeElement;
  });
*/

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected navbar title', () => {
    fixture.detectChanges();
    const navBarBrand = de.nativeElement;
    expect(navBarBrand.innerText).toContain('Acme product Management');
  });
});
