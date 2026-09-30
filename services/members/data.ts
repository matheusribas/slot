import { ServiceType } from "../services/data";

interface BusinessHoursType {
  workingDay: boolean;
  day: number;
  label: string;
  start: string;
  end: string;
}

export interface MemberType {
  id: string;
  accountId: string;
  status: "active" | "inactive";
  name: string;
  phone: number | null;
  services: ServiceType[];
  businessHours: BusinessHoursType[];
}

export const members: MemberType[] = [
  {
    id: "member-1",
    accountId: "account-1",
    status: "active",
    name: "Wesley Brizzi",
    phone: 11900000000,
    services: [
      {
        id: "service-1",
        accountId: "account-1",
        name: "Corte de cabelo",
        color: "#c0dfff",
        duration: 3600,
        description: null,
      },
      {
        id: "service-2",
        accountId: "account-1",
        name: "Corte de cabelo Afro",
        color: "#faff0f",
        duration: 10200,
        description: null,
      },
      {
        id: "service-3",
        accountId: "account-1",
        name: "Corte de barba",
        color: "#c0fff5",
        duration: 3600,
        description: null,
      },
    ],
    businessHours: [
      {
        workingDay: true,
        day: 0,
        label: "domingo",
        start: "09:00:00",
        end: "15:00:00",
      },
      {
        workingDay: false,
        day: 1,
        label: "segunda",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 2,
        label: "terça",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 3,
        label: "quarta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 4,
        label: "quinta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 5,
        label: "sexta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 6,
        label: "sábado",
        start: "09:00:00",
        end: "18:00:00",
      },
    ],
  },
  {
    id: "member-2",
    accountId: "account-1",
    status: "active",
    name: "Junior",
    phone: 11900000001,
    services: [
      {
        id: "service-1",
        accountId: "account-1",
        name: "Corte de cabelo",
        color: "#c0dfff",
        duration: 3600,
        description: null,
      },
      {
        id: "service-3",
        accountId: "account-1",
        name: "Corte de barba",
        color: "#c0fff5",
        duration: 3600,
        description: null,
      },
    ],
    businessHours: [
      {
        workingDay: true,
        day: 0,
        label: "domingo",
        start: "09:00:00",
        end: "15:00:00",
      },
      {
        workingDay: false,
        day: 1,
        label: "segunda",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 2,
        label: "terça",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 3,
        label: "quarta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 4,
        label: "quinta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 5,
        label: "sexta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 6,
        label: "sábado",
        start: "09:00:00",
        end: "18:00:00",
      },
    ],
  },
  {
    id: "member-3",
    accountId: "account-1",
    status: "inactive",
    name: "Dodo",
    phone: 11900000002,
    services: [
      {
        id: "service-1",
        accountId: "account-1",
        name: "Corte de cabelo",
        color: "#c0dfff",
        duration: 3600,
        description: null,
      },
      {
        id: "service-3",
        accountId: "account-1",
        name: "Corte de barba",
        color: "#c0fff5",
        duration: 3600,
        description: null,
      },
    ],
    businessHours: [
      {
        workingDay: true,
        day: 0,
        label: "domingo",
        start: "09:00:00",
        end: "15:00:00",
      },
      {
        workingDay: false,
        day: 1,
        label: "segunda",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 2,
        label: "terça",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 3,
        label: "quarta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 4,
        label: "quinta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 5,
        label: "sexta",
        start: "09:00:00",
        end: "18:00:00",
      },
      {
        workingDay: true,
        day: 6,
        label: "sábado",
        start: "09:00:00",
        end: "18:00:00",
      },
    ],
  },
];
