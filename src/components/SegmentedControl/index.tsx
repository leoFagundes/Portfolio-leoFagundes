import { ReactNode } from "react";
import * as S from "./style";

export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
  icon?: ReactNode;
  count?: number;
};

type SegmentedControlProps<T extends string> = {
  label: string;
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  tabIndex?: number;
};

export const SegmentedControl = <T extends string>({
  label,
  options,
  value,
  onChange,
  tabIndex,
}: SegmentedControlProps<T>) => (
  <S.SegmentedControlContainer role="group" aria-label={label}>
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        aria-pressed={option.value === value}
        tabIndex={tabIndex}
        onClick={() => onChange(option.value)}
      >
        {option.icon}
        {option.label}
        {option.count !== undefined && (
          <span className="count">{option.count}</span>
        )}
      </button>
    ))}
  </S.SegmentedControlContainer>
);
