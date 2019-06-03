import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFormComponent } from './api-form.component';
import { TestingModule } from '../../../../testing/utils';

describe('ApiFormComponent', () => {
  let component: ApiFormComponent;
  let fixture: ComponentFixture<ApiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ApiFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with thirteen controls', () => {
    expect(Object.keys(component.apiForm.controls).length).toBe(13);
    expect(component.apiForm.contains('id')).toBe(true);
    expect(component.apiForm.contains('title')).toBe(true);
    expect(component.apiForm.contains('summary')).toBe(true);
    expect(component.apiForm.contains('description')).toBe(true);
    expect(component.apiForm.contains('compliant')).toBe(true);
    expect(component.apiForm.contains('internal')).toBe(true);
    expect(component.apiForm.contains('staging')).toBe(true);
    expect(component.apiForm.contains('approved')).toBe(true);
    expect(component.apiForm.contains('stage')).toBe(true);
    expect(component.apiForm.contains('github_url')).toBe(true);
    expect(component.apiForm.contains('owner')).toBe(true);
  });

  describe('title', () => {
    it('should make the title control required', () => {
      const control = component.apiForm.get('title');
      control.setValue('');
      expect(control.valid).toBe(false);
    });

    it('should be false if title is less than 6', () => {
      const control = component.apiForm.get('title');
      control.setValue('a'.repeat(5));
      expect(control.valid).toBe(false);
    });

    it('should be true if title is >= than 6', () => {
      const control = component.apiForm.get('title');
      control.setValue('a'.repeat(6));
      expect(control.valid).toBe(true);
    });
  });

  describe('summary', () => {
    it('should make the summary control required', () => {
      const control = component.apiForm.get('summary');
      control.setValue('');
      expect(control.valid).toBe(false);
    });

    it('should be false if summary is less than 6', () => {
      const control = component.apiForm.get('summary');
      control.setValue('a'.repeat(5));
      expect(control.valid).toBe(false);
    });

    it('should be true if summary is >= than 6', () => {
      const control = component.apiForm.get('summary');
      control.setValue('a'.repeat(6));
      expect(control.valid).toBe(true);
    });
  });

  describe('description', () => {
    it('should make the description control required', () => {
      const control = component.apiForm.get('description');
      control.setValue('');
      expect(control.valid).toBe(false);
    });

    it('should be false if description is less than 6', () => {
      const control = component.apiForm.get('description');
      control.setValue('a'.repeat(5));
      expect(control.valid).toBe(false);
    });

    it('should be true if description is >= than 6', () => {
      const control = component.apiForm.get('description');
      control.setValue('a'.repeat(6));
      expect(control.valid).toBe(true);
    });
  });

  describe('internal', () => {
    it('should make the internal control required', () => {
      const control = component.apiForm.get('internal');
      control.setValue(null);
      expect(control.valid).toBe(false);
    });
  });

  describe('staging', () => {
    describe('url', () => {
      it('should make the url control required', () => {
        const control = component.apiForm.get('staging.url');
        control.setValue('');
        expect(control.valid).toBe(false);
      });
      it('should be false if summary is less than 3', () => {
        const control = component.apiForm.get('staging.url');
        control.setValue('a'.repeat(2));
        expect(control.valid).toBe(false);
      });
      it('should be true if summary is >= than 3', () => {
        const control = component.apiForm.get('staging.url');
        control.setValue('a'.repeat(3));
        expect(control.valid).toBe(true);
      });
    });

    describe('swagger_url', () => {
      it('should make the swagger_url control required', () => {
        const control = component.apiForm.get('staging.swagger_url');
        control.setValue('');
        expect(control.valid).toBe(false);
      });
      it('should be false if summary is less than 3', () => {
        const control = component.apiForm.get('staging.swagger_url');
        control.setValue('a'.repeat(2));
        expect(control.valid).toBe(false);
      });
      it('should be true if summary is >= than 3', () => {
        const control = component.apiForm.get('staging.swagger_url');
        control.setValue('a'.repeat(3));
        expect(control.valid).toBe(true);
      });
    });

    describe('deployed', () => {
      it('should make the internal control required', () => {
        const control = component.apiForm.get('staging.deployed');
        // control.setValue(null);
        console.log(control);
        expect(control.valid).toBe(false);
      });
    });
  });

  describe('production', () => {
    describe('url', () => {
      it('should make the url control required', () => {
        const control = component.apiForm.get('production.url');
        control.setValue('');
        expect(control.valid).toBe(false);
      });
      it('should be false if summary is less than 3', () => {
        const control = component.apiForm.get('production.url');
        control.setValue('a'.repeat(2));
        expect(control.valid).toBe(false);
      });
      it('should be true if summary is >= than 3', () => {
        const control = component.apiForm.get('production.url');
        control.setValue('a'.repeat(3));
        expect(control.valid).toBe(true);
      });
    });

    describe('swagger_url', () => {
      it('should make the swagger_url control required', () => {
        const control = component.apiForm.get('production.swagger_url');
        control.setValue('');
        expect(control.valid).toBe(false);
      });
      it('should be false if summary is less than 3', () => {
        const control = component.apiForm.get('production.swagger_url');
        control.setValue('a'.repeat(2));
        expect(control.valid).toBe(false);
      });
      it('should be true if summary is >= than 3', () => {
        const control = component.apiForm.get('production.swagger_url');
        control.setValue('a'.repeat(3));
        expect(control.valid).toBe(true);
      });
    });

    describe('deployed', () => {
      it('should make the internal control required', () => {
        const control = component.apiForm.get('production.deployed');
        control.setValue(null);
        expect(control.valid).toBe(false);
      });
    });
  });

  describe('approved', () => {
    it('approved should be false', () => {
      const control = component.apiForm.get('approved');
      expect(control.value).toBe(false);
    });
  });

  describe('stage', () => {
    it('should make the stage control required', () => {
      const control = component.apiForm.get('stage');
      expect(control.valid).toBe(false);
    });
  });

  describe('github_url', () => {
    it('should make the github_url control required', () => {
      const control = component.apiForm.get('github_url');
      control.setValue('');
      expect(control.valid).toBe(false);
    });
    it('should be false if summary is less than 6', () => {
      const control = component.apiForm.get('github_url');
      control.setValue('a'.repeat(5));
      expect(control.valid).toBe(false);
    });
    it('should be true if summary is >= than 6', () => {
      const control = component.apiForm.get('github_url');
      control.setValue('a'.repeat(6));
      expect(control.valid).toBe(true);
    });
  });


  describe('owner', () => {
    describe('product', () => {
      describe('name', () => {
        it('should make the name control required', () => {
          const control = component.apiForm.get('owner.product.name');
          control.setValue('');
          expect(control.valid).toBe(false);
        });
        it('should be false if summary is less than 3', () => {
          const control = component.apiForm.get('owner.product.name');
          control.setValue('a'.repeat(2));
          expect(control.valid).toBe(false);
        });
        it('should be true if summary is >= than 3', () => {
          const control = component.apiForm.get('owner.product.name');
          control.setValue('a'.repeat(3));
          expect(control.valid).toBe(true);
        });
      });

      describe('contactDetails', () => {
        it('should make the contactDetails control required', () => {
          const control = component.apiForm.get('owner.product.contactDetails');
          control.setValue('');
          expect(control.valid).toBe(false);
        });

        it('should be false if contactDetails is not an email', () => {
          const control = component.apiForm.get('owner.product.contactDetails');
          control.setValue('aaaaaa');
          expect(control.valid).toBe(false);
        });

        it('should be true if emailAddress is provided', () => {
          const control = component.apiForm.get('owner.product.contactDetails');
          control.setValue('aaa@email.com');
          expect(control.valid).toBe(true);
        });
      });
    });

    describe('technical', () => {
      describe('name', () => {
        it('should make the name control required', () => {
          const control = component.apiForm.get('owner.technical.name');
          control.setValue('');
          expect(control.valid).toBe(false);
        });
        it('should be false if summary is less than 3', () => {
          const control = component.apiForm.get('owner.technical.name');
          control.setValue('a'.repeat(2));
          expect(control.valid).toBe(false);
        });
        it('should be true if summary is >= than 3', () => {
          const control = component.apiForm.get('owner.technical.name');
          control.setValue('a'.repeat(3));
          expect(control.valid).toBe(true);
        });
      });

      describe('contactDetails', () => {
        it('should make the contactDetails control required', () => {
          const control = component.apiForm.get('owner.technical.contactDetails');
          control.setValue('');
          expect(control.valid).toBe(false);
        });

        it('should be false if contactDetails is not an email', () => {
          const control = component.apiForm.get('owner.technical.contactDetails');
          control.setValue('aaaaaa');
          expect(control.valid).toBe(false);
        });

        it('should be true if emailAddress is provided', () => {
          const control = component.apiForm.get('owner.technical.contactDetails');
          control.setValue('aaa@email.com');
          expect(control.valid).toBe(true);
        });
      });
    });
  });

});
