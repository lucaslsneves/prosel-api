import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('usuario_prosel')
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome_completo: string;

  @Column({ type: 'varchar', length: 20 })
  cpf: string;

  @Column({ type: 'varchar', length: 100 })
  foto3x4: string;

  @Column({ type: 'varchar', length: 100 })
  sexo: string;

  @Column({ type: 'varchar', length: 100 })
  comprovante_endereco: string;

  @Column({ type: 'varchar', length: 100 })
  rg: string;

  @Column({ type: 'varchar', length: 100 })
  cartao_pis: string;

  @Column({ type: 'varchar', length: 100 })
  cartao_sus: string;

  @Column({ type: 'varchar', length: 100 })
  cartao_vacinacao: string;

  @Column({ type: 'varchar', length: 100 })
  diploma: string;

  @Column({ type: 'varchar', length: 100 })
  curriculo: string;

  @Column({ type: 'varchar', length: 100 })
  conta_bancaria: string;

  @Column({ type: 'varchar', length: 100 })
  esocial: string;

  @Column({ type: 'varchar', length: 100 })
  especializacoes: string;

  @Column({ type: 'varchar', length: 100 })
  reservista: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'varchar', length: 100 })
  cpf_dependentes: string;

  @Column({ type: 'varchar', length: 100 })
  certidao_casamento: string;

  @Column({ type: 'varchar', length: 100 })
  rg_dependentes: string;

  @Column({ type: 'varchar', length: 100 })
  vacinacao_dependentes: string;

  @Column({ type: 'varchar', length: 100 })
  comprovante_escolar_dependentes: string;

  @Column({ type: 'varchar', length: 100 })
  prosel: string;

  @Column({ type: 'varchar', length: 100 })
  titulo_eleitor: string;

  @Column({ type: 'varchar', length: 100 })
  carteira_conselho: string;

  @Column('tinyint')
  possui_dependentes: 1;

  @Column({ type: 'varchar', length: 100 })
  estado_civil: string;

  @Column({ type: 'varchar', length: 100 })
  cor: string;

  @Column({ type: 'varchar', length: 100 })
  funcao: string;

  @Column({ type: 'varchar', length: 100 })
  cnh: string;

  @Column({ type: 'varchar', length: 100 })
  carteira_trabalho: string;
}
