import type { MDXComponents } from 'mdx/types';
import { Callout, KeyTakeaway, NumberedInsight } from '@/components/mdx';

export function useMDXComponents(): MDXComponents {
  return {
    Callout,
    KeyTakeaway,
    NumberedInsight,
  };
}
