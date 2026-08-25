'use client';

import { sendGAEvent } from '@next/third-parties/google';

declare global {
    interface Window {
        fbq?: (...args: unknown[]) => void;
    }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
    if (typeof window === 'undefined') return;
    if (process.env.NEXT_PUBLIC_GA_ID) {
        sendGAEvent('event', name, params ?? {});
    }
}

export function trackPixelEvent(name: string, params?: Record<string, unknown>): void {
    if (typeof window === 'undefined') return;
    if (process.env.NEXT_PUBLIC_META_PIXEL_ID && typeof window.fbq === 'function') {
        window.fbq('track', name, params ?? {});
    }
}

// Fires once, only after the CRM confirms the lead was received — not on
// button click. The reference implementation (digisenda-tax-services) fires
// its Pixel "Schedule" event from a global click listener, so it counts
// clicks regardless of whether the submit actually succeeded.
export function trackLead(params?: Record<string, unknown>): void {
    trackEvent('generate_lead', params);
    trackPixelEvent('Lead', params);
}
