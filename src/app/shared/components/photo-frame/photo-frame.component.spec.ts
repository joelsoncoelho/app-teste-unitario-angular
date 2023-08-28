import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFrameComponent ],
      imports: [PhotoFrameModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
