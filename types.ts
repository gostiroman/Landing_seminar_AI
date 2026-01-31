import React from 'react';

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  icon: 'brain' | 'wand' | 'chart' | 'shield' | 'rocket';
}

export interface DemoPreset {
  id: string;
  label: string;
  prompt: string;
  icon: React.ReactNode;
}