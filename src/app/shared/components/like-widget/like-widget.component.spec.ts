import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      providers: [UniqueIdService],
      imports:[FontAwesomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it(`should create component`, () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`Should auto-generate ID during ngOnInit when (@Input id) is  not assigned`, () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned`, () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  //testando chamada do emit
  /*
  it(`#${LikeWidgetComponent.prototype.like.name} Should trigger emission when called`, done => {
    fixture.detectChanges();
    component.liked.subscribe(()=>{
      expect(true).toBeTrue();
      done();
    });
    component.like();
  });
  */

  it(`#${LikeWidgetComponent.prototype.like.name} Should trigger (@Output liked) when called`,() => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
