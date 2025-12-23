'use client';

import React from 'react';
import {
  PageConstructor,
  PageConstructorProvider,
  Theme,
} from '@gravity-ui/page-constructor';
import { ThemeProvider } from '@gravity-ui/uikit';
import { landingContent } from '@/content/landing';
import TagManager from 'react-gtm-module';

export function LandingPage() {
  const [theme, setTheme] = React.useState<Theme>(Theme.Light);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? Theme.Dark : Theme.Light);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? Theme.Dark : Theme.Light);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    // Detect mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Map Theme enum to ThemeProvider string
  const themeValue = theme === Theme.Dark ? 'dark' : 'light';

  React.useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-P7CJRZM2'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={themeValue}>
      <PageConstructorProvider
        theme={theme}
        isMobile={isMobile}
        projectSettings={{
          isAnimationEnabled: true,
        }}
      >
        <PageConstructor content={landingContent} />
      </PageConstructorProvider>
    </ThemeProvider>
  );
}
