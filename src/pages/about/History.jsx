import React from 'react';
import styled from 'styled-components';
import { Headline1 } from '../../styles/Typography';

const HistoryWrapper = styled.div`
  position: relative;
`;

const Title = styled(Headline1)`
  font-size: 3rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin: 2rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 4rem; // 좌우 패딩을 5rem으로 설정

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem; // 화면이 작아질 때 패딩 줄임
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem; // 모바일 화면에서 더 작은 패딩
  }
`;

const Timeline = styled.div`
`;

const TimelineItem = styled.div`
  display: flex;
  border-bottom: ${props => props.isLast ? 'none' : `1px solid ${props.theme.colors.gray[300]}`};
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const Year = styled.div`
  font-size: 4.125rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary.DEFAULT};
  width: 250px;
  flex-shrink: 0;
  padding: 1rem 1rem 1rem 0; // 오른쪽 패딩만 유지
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    width: 100%; // 모바일에서 전체 너비 사용
  }
`;

const EventList = styled.ul`
  list-style-type: none;
  padding: 1rem 0; // 좌우 패딩 제거
  padding-top: 2rem;
  padding-left: 20rem;
  margin: 0;
  flex-grow: 1;
`;

const Event = styled.li`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const History = () => {
  const timeline = [
    {
      year: '2012.10',
      events: ['동양프린팅 설립']
    },
    {
      year: '2015.06',
      events: [
        '(주)대경인쇄 법인 설립',
        '9도 그라비어 인쇄기 설치'
      ]
    },
    {
      year: '2021.10',
      events: [
        '제2공장 인수',
        '10도 그라비어 인쇄기 1기 추가 설치',
        '드라이, T다이 1기 설치',
        '슬리터기 설치'
      ]
    },
    {
      year: '2024.',
      events: ['제1공장, 제2공장 통합 공사']
    }
  ];

  return (
    <HistoryWrapper>
        <Content>
            <Title>회사연혁</Title>
            <Timeline>
                {timeline.map((item, index) => (
                <TimelineItem key={index} isLast={index === timeline.length - 1}>
                    <Year>{item.year}</Year>
                    <EventList>
                    {item.events.map((event, eventIndex) => (
                        <Event key={eventIndex}>{event}</Event>
                    ))}
                    </EventList>
                </TimelineItem>
                ))}
            </Timeline>
      </Content>
    </HistoryWrapper>
  );
};

export default History;