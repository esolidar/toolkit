import { format, addDays, subDays } from 'date-fns';
import { getToday, dateFormat } from '../src/constants/date';
import interest from './interest';
import AccelerationProgram from '../src/interfaces/accelerationProgram.types';

const today = getToday();

const accelerationProgram: AccelerationProgram = {
  id: 1,
  title: 'First program',
  intro: 'Loram ipsum intro',
  images: [
    {
      created_at: '2022-02-10 15:18:11',
      id: 125,
      image:
        'whitelabel/26/project-config/7dd30979-5686-42bb-ba8c-620ae0305d1e.jpg?width=600px&height=340px',
      image_size: '47516',
      image_type: 'jpg',
      project_config_id: 58,
      streamImage: 'amazons3',
      updated_at: '2022-02-10 15:18:11',
    },
  ],
  program_format: 'Lorem ipsum',
  who_should_apply: 'Everyone',
  location: 'Porto, Portugal',
  location_address: '{"floor":"12","info":"Primeiro Piso"}',
  start_at: format(subDays(today, 2), dateFormat),
  closed_at: format(addDays(today, 20), dateFormat),
  ended_at: format(addDays(today, 30), dateFormat),
  timezone: 'Europe/Lisbon',
  skills: [
    {
      created_at: '2021-12-07 17:47:13',
      deleted_at: null,
      id: 11,
      name_br: 'Vendas e Marketing',
      name_en: 'Sales & Marketing',
      name_pt: 'Vendas e Marketing',
      pivot: { project_config_id: 58, skill_id: 11 },
      project_config_id: 58,
      skill_id: 11,
      summary_br: null,
      summary_en: null,
      summary_pt: null,
      type: 'hard',
      updated_at: '2021-12-07 17:47:13',
    },
    {
      created_at: '2021-12-07 17:47:13',
      deleted_at: null,
      id: 12,
      name_br: 'Comunicação',
      name_en: 'Communication',
      name_pt: 'Comunicação',
      pivot: { project_config_id: 58, skill_id: 11 },
      project_config_id: 58,
      skill_id: 11,
      summary_br: null,
      summary_en: null,
      summary_pt: null,
      type: 'soft',
      updated_at: '2021-12-07 17:47:13',
    },
  ],
  remote: false,
  archived_at: null,
  interests: [interest],
  form: '{}',
};

export default accelerationProgram;
