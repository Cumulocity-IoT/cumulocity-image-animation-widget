export interface ICumulocityEvent {
    channel: string;
    data: {
        data: {
          creationTime: string;
          id: string;
          self: string;
          source: {
            id: string;
            name: string;
            self: string;
          }
          text: string;
          time: string;
          type: string;
        };
        realtimeAction: string;
    },
    id: string;
}