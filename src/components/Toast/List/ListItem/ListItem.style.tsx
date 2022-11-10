import { StatusBackgroundColor } from '@styles/custom/status';
import { FadeInDownBig } from '@styles/effects/animations';
import styled from 'styled-components';
import { TStatus } from 'types/common';

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

  ${({ $status }) => StatusBackgroundColor({ $status })}
  ${FadeInDownBig};
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
    const start: Record<TStatus, string> = {
      INFO: theme.colors.$primary_dark,
      SUCCESS: theme.colors.$secondary_dark,
      ERROR: theme.colors.$tertiary_dark,
    };

    const stop: Record<TStatus, string> = {
      INFO: theme.colors.$primary,
      SUCCESS: theme.colors.$secondary,
      ERROR: theme.colors.$tertiary,
    };

    return $isPaused ? stop[$status] : start[$status];
  }};
`;
