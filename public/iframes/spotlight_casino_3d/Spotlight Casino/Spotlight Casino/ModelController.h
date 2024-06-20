//
//  ModelController.h
//  Spotlight Casino
//
//  Created by Samson Ng on 02/02/2015.
//  Copyright (c) 2015 Samson Ng. All rights reserved.
//

#import <UIKit/UIKit.h>

@class DataViewController;

@interface ModelController : NSObject <UIPageViewControllerDataSource>

- (DataViewController *)viewControllerAtIndex:(NSUInteger)index storyboard:(UIStoryboard *)storyboard;
- (NSUInteger)indexOfViewController:(DataViewController *)viewController;

@end

