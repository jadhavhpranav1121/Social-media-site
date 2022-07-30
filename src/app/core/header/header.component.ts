import { Component,OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from '../../tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { LoaderService } from '../services/loader.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hamburgerhidden=false;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile = true;
  private static userDocument: UserDocument;
  constructor(private loginSheet: MatBottomSheet,
    private router: Router,private loader:LoaderService) { 
      this.auth.listenToSignInStateChanges(
        user => {
          this.auth.checkSignInState(
            {
              whenSignedIn: user => {
    
      
              },
              whenSignedOut: user => {
                HeaderComponent.userDocument = null;
              },
              whenSignedInAndEmailNotVerified: user => {
                this.router.navigate(["emailVerification"]);
              },
              whenSignedInAndEmailVerified: user => {
                this.getUserProfile();
              },
              whenChanged: user => {
    
              }
            }
          );
        }
      );
    }

  ngOnInit(): void {
  }
  public static getUserDocument(){
    return HeaderComponent.userDocument;
  }
  getUsername(){
    try {
      this.loader.show();
      console.log(HeaderComponent.userDocument);
      return HeaderComponent.userDocument.publicName;
    } catch (err) {
      console.log(err);
    }
  }
  getUserProfile(){
    return new Promise<number>(
      (resolved, rejected) => {
        this.firestore.listenToDocument(
          {
            name: "Getting Documents",
            path: ["Users", this.auth.getAuth().currentUser.uid],
            onUpdate: (result) => {
              HeaderComponent.userDocument = <UserDocument>result.data();
              this.userHasProfile = result.exists; 
              HeaderComponent.userDocument.userId = this.auth.getAuth().currentUser.uid;
              if(this.userHasProfile) {
                this.router.navigate(["postfeed"]);
                resolved(1);
              } else {
                resolved(0);
              }
            }
          }
        );
      }
    );
  }
  
  add(number1, number2) {
    return number1 + number2;
  }
  onLogoutClick(){
    this.auth.signOut();
    this.router.navigate(["/"])
  }
  
  loggedIn(){
    return this.auth.isSignedIn();
  }
  
  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent);
  }
  }


export interface UserDocument {
publicName: string;
description: string;
userId: string;
}
