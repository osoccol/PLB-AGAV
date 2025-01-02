import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({users: []}), // Exemple de paramètres simulés
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should sum numbers', () => {
    expect(component.add(2, 3)).toEqual(5);
    expect(component.add(0, 0)).toEqual(0);
    expect(component.add(-4, -2)).toEqual(-6);
  });
});
