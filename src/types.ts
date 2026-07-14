/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CreativeService {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  tagline: string;
  deliverables: string[];
}

export interface VisionPillar {
  title: string;
  quote: string;
  description: string;
}

export interface ComingSoonInquiry {
  email: string;
  interest: string;
  message?: string;
}
