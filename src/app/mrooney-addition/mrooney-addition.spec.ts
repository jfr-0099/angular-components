import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrooneyAddition } from './mrooney-addition';

describe('MrooneyAddition', () => {
  let component: MrooneyAddition;
  let fixture: ComponentFixture<MrooneyAddition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrooneyAddition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrooneyAddition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
