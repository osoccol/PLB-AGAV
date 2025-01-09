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

  // TDD
  it('should multiply numbers', () => {
    expect(component.product([2, 4, 5])).toEqual(40);
    expect(component.product([23, 4, 0])).toEqual(0);
    expect(component.product([23, 4])).toEqual(92);
    expect(component.product([23])).toEqual(23);
    expect(component.product([2, 2, 2, 2, -2])).toEqual(-32);
    expect(component.product([])).toEqual(1);
  });

});
