import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({});
        service = TestBed.inject(UserService);
    });

    it('should be create', () => {
        expect(service).toBeTruthy();
    });
    
    it('should be logged In', () => {
        expect(service.isLoggedIn()).toEqual(true);
    });

    it('should get instant users', () => {
        expect(service.getInstantUsers()[0].id).toEqual(101);
    });

    it('should add user', () => {
        service.addUser({id: 111, firstName: 'A', lastName: 'B', email: 'email@com', phone: '000-222'});
        expect(service.users.length).toEqual(11);
        expect(service.users[10].firstName).toEqual('A');
    });

})