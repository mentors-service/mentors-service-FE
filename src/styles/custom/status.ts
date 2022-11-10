import { TStatus } from '@@types/common';
import { css } from 'styled-components';

interface IStatus {
  $status: TStatus;
  $hover?: boolean;
  $dark?: boolean;
}

export const StatusBackgroundColor = ({ $status, $hover = true, $dark = false }: IStatus) => css`
  background-color: ${({ theme }) => {
    const color: Record<TStatus, string> = {
      INFO: $dark ? theme.colors.$primary_dark : theme.colors.$primary,
      SUCCESS: $dark ? theme.colors.$secondary_dark : theme.colors.$secondary,
      ERROR: $dark ? theme.colors.$tertiary_dark : theme.colors.$tertiary,
    };
    return color[$status];
  }};

  &:hover {
    background-color: ${({ theme }) => {
      if (!$hover) return null;

      const color: Record<TStatus, string> = {
        INFO: $dark ? theme.colors.$primary : theme.colors.$primary_dark,
        SUCCESS: $dark ? theme.colors.$secondary : theme.colors.$secondary_dark,
        ERROR: $dark ? theme.colors.$tertiary : theme.colors.$tertiary_dark,
      };

      return color[$status];
    }};
  }
`;
