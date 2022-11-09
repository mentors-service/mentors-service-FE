import { FadeInDownBig } from '@styles/effects/animations';
import styled from 'styled-components';

export const Item = styled.li``;

export const Button = styled.button<{ $status: 'SUCCESS' | 'ERROR' | 'INFO' }>`
  height: 50px;
  min-width: 200px;
  position: relative;

  padding: 5px 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ $status, theme }) => {
    const color: Record<'SUCCESS' | 'ERROR' | 'INFO', string> = {
      INFO: theme.colors.$primary,
      SUCCESS: theme.colors.$secondary,
      ERROR: theme.colors.$tertiary,
    };

    return color[$status];
  }};

  &:hover {
    background-color: ${({ $status, theme }) => {
      const color: Record<'SUCCESS' | 'ERROR' | 'INFO', string> = {
        INFO: theme.colors.$primary_dark,
        SUCCESS: theme.colors.$secondary_dark,
        ERROR: theme.colors.$tertiary_dark,
      };

      return color[$status];
    }};
  }

  ${() => FadeInDownBig}
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.$white};
`;

export const TimerBar = styled.div<{ $status: 'SUCCESS' | 'ERROR' | 'INFO'; $isPaused: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10px;
  background-color: ${({ $status, $isPaused, theme }) => {
    const color: Record<'SUCCESS' | 'ERROR' | 'INFO', string> = {
      INFO: theme.colors.$primary_dark,
      SUCCESS: theme.colors.$secondary_dark,
      ERROR: theme.colors.$tertiary_dark,
    };

    const temp: Record<'SUCCESS' | 'ERROR' | 'INFO', string> = {
      INFO: theme.colors.$primary,
      SUCCESS: theme.colors.$secondary,
      ERROR: theme.colors.$tertiary,
    };

    return $isPaused ? temp[$status] : color[$status];
  }};
`;
