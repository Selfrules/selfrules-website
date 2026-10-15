import type { MDXComponents } from 'mdx/types';
import {
  Callout,
  KeyTakeaway,
  NumberedInsight,
  BuildVsBuyDiagram,
  MetricsTriangleDiagram,
  AiSplitDiagram,
} from '@/components/mdx';

export function useMDXComponents(): MDXComponents {
  return {
    Callout,
    KeyTakeaway,
    NumberedInsight,
    BuildVsBuyDiagram,
    MetricsTriangleDiagram,
    AiSplitDiagram,
  };
}
