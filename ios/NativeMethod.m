//
//  NativeMethod.m
//  maeda
//
//  Created by admin on 10/1/20.
//

#import <UIKit/UIKit.h>
#import <OPPWAMobile/OPPWAMobile.h>
#import "NativeMethod.h"

@implementation NativeMethod{
  RCTResponseSenderBlock onDoneClick;
  RCTResponseSenderBlock onCancelClick;
  UIViewController *rootViewController;
  NSString *isRedirect;
  OPPPaymentProvider *provider;
  UIColor *mainColor;
  UIColor *amountColor;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(
                  openHyperPay:(NSDictionary *)indic
                  createDialog:(RCTResponseSenderBlock)doneCallback
                  createDialog:(RCTResponseSenderBlock)cancelCallback
                  ) {
  onDoneClick = doneCallback;
  onCancelClick = cancelCallback;
  NSArray *events = @[];
  
  provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeTest];
  
  OPPCheckoutSettings *checkoutSettings = [[OPPCheckoutSettings alloc] init];
  
  // Set available payment brands for your shop
  if ([indic[@"paymentType"] isEqualToString:@"mada_card"]) {
    checkoutSettings.paymentBrands = @[@"MADA"];
  } else {
    checkoutSettings.paymentBrands = @[@"VISA"];
  }
  
  mainColor = [UIColor colorWithRed: 0.61 green: 0.61 blue: 0.61 alpha: 1.00];
  amountColor = [UIColor colorWithRed: 1.00 green: 1.00 blue: 1.00 alpha: 1.00];
  
  // Set shopper result URL
  checkoutSettings.shopperResultURL = @"org.reactjs.native.example.kidVoice.payments://result";
  checkoutSettings.theme.navigationBarBackgroundColor = mainColor;
  checkoutSettings.theme.confirmationButtonColor = mainColor;
  checkoutSettings.theme.accentColor = mainColor;
  checkoutSettings.theme.separatorColor = amountColor;
  checkoutSettings.theme.cellHighlightedBackgroundColor = amountColor;
  checkoutSettings.displayTotalAmount = true;
  checkoutSettings.language = @"en";
  //  checkoutSettings.storePaymentDetails = OPPCheckoutStorePaymentDetailsModePrompt;
  
  OPPCheckoutProvider *checkoutProvider = [OPPCheckoutProvider checkoutProviderWithPaymentProvider:provider
                                                                                        checkoutID:indic[@"checkoutId"]
                                                                                          settings:checkoutSettings
                                           ];
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [checkoutProvider presentCheckoutForSubmittingTransactionCompletionHandler:^(OPPTransaction * _Nullable transaction, NSError * _Nullable error) {
      NSLog(@"TRANSACTION %@", transaction);
      if (error) {
        // Executed in case of failure of the transaction for any reason
        NSLog(@"ERRROOOOOORRRRRR!!!! %@", error);
        self -> onCancelClick(@[@"error", events]);
      } else if (transaction.type == OPPTransactionTypeSynchronous) {
        //          NSDictionary *responeDic = @{@"resourcePath" : transaction.resourcePath};
        self -> onDoneClick(@[@"success"]);
        NSLog(@"%@", transaction.resourcePath);
      } else if (transaction.type == OPPTransactionTypeAsynchronous) {
        // The SDK opens transaction.redirectUrl in a browser
        NSOperationQueue *mainQueue = [NSOperationQueue mainQueue];
        [
         [NSNotificationCenter defaultCenter] addObserverForName:@"getStatusOrder"
         object:nil
         queue:mainQueue
         usingBlock:^(NSNotification * _Nonnull note) {
          [checkoutProvider dismissCheckoutAnimated:YES completion:^{
            self -> isRedirect = @"1";
            NSURL *url = note.object;
            NSString *urlString = [url absoluteString];
            NSLog(@"%@", urlString);
            if (![urlString isEqualToString:@"org.reactjs.native.example.kidVoice.payments://result"]) {
              //                                                                  NSDictionary *responeDic = @{@"resourcePath": transaction.resourcePath};
              self -> onDoneClick(@[@"success"]);
            }
          }];
        }
         ];
      }
    } cancelHandler:^{
      // Executed if the shopper closes the payment page prematurely
      self -> onCancelClick(@[@"cancel", events]);
    }];
  });
}

@end
