import { LucideIcon } from 'lucide-react';

export enum SlideType {
  COVER = 'COVER',
  INTRO = 'INTRO',
  PHASES = 'PHASES',
  FOCUS_POINT_DETAIL = 'FOCUS_POINT_DETAIL',
  SUMMARY = 'SUMMARY',
  ENDING = 'ENDING'
}

export interface PhaseSubStep {
  title: string;
  description: string;
  visualType: 
    | 'POLICY_ALIGNMENT' 
    | 'PROFIT_MODEL' 
    | 'SERVICE_SCOPE'
    | 'BOUNDARY_MAPPING'   // Phase 2 Step 1
    | 'ISO_ACCOUNTING'     // Phase 2 Step 2
    | 'EMISSION_SCENARIOS' // Phase 2 Step 3
    | 'STRATEGY_PLANNING'  // Phase 2 Step 4
    | 'PILOT_SELECTION'    // Phase 3 Step 1
    | 'PILOT_RETROFIT'     // Phase 3 Step 2
    | 'PILOT_POLICY'       // Phase 3 Step 3
    | 'PILOT_EVALUATION'   // Phase 3 Step 4
    | 'CONSTRUCTION_RENEWABLES' // Phase 4 Step 1
    | 'CONSTRUCTION_SCHEDULING' // Phase 4 Step 2
    | 'CONSTRUCTION_ECOSYSTEM'  // Phase 4 Step 3
    | 'CONSTRUCTION_PLATFORM'   // Phase 4 Step 4
    | 'GAP_CALCULATION'     // Phase 5 Step 1
    | 'ECO_SINKS'           // Phase 5 Step 2
    | 'OFFSET_STRATEGY'     // Phase 5 Step 3
    | 'ACCEPTANCE_CERTIFICATION' // Phase 6 Step 1 (New)
    | 'ACCEPTANCE_MECHANISM'     // Phase 6 Step 2 (New)
    | 'ACCEPTANCE_ASSETS';       // Phase 6 Step 3 (New)
  chartData?: any; 
}

export interface PhaseStep {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  details: string[]; // Keep for backward compatibility/other phases
  subSteps?: PhaseSubStep[]; // New rich data structure
  color: string;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
  [key: string]: any;
}

export interface FocusPoint {
  id: number;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  keyActionItems: string[]; // Short version for card
  fullDetails?: string[]; // Detailed version for modal
  benefits: string[];
  chartType: 'PIE' | 'BAR' | 'FLOW' | 'LIST'; 
  chartData?: ChartData[];
  visualLabel?: string; 
}

export interface SlideData {
  id: number;
  type: SlideType;
  title?: string;
}