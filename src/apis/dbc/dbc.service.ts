import { Injectable, Logger } from '@nestjs/common';
import {
  DataSource,
  DeepPartial,
  DeleteResult,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  ObjectId,
  ObjectLiteral,
  QueryResult,
  QueryRunner,
  Repository,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpsertOptions } from 'typeorm/repository/UpsertOptions';
import { assembly_room } from '../reservations/entity/assemblyRmReservation.entity';

@Injectable()
export class DbcService {
  private readonly log = new Logger(DbcService.name);
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(assembly_room)
    private readonly ttestRepository: Repository<assembly_room>,
  ) {}

  createQueryRunner(): QueryRunner {
    return this.dataSource.createQueryRunner();
  }

  async save<Entity, T extends DeepPartial<Entity>>(
    queryRunner: QueryRunner,
    targetOrEntity: EntityTarget<Entity>,
    entity: T,
    options?: SaveOptions,
  ): Promise<T & Entity> {
    return await queryRunner.manager.save(targetOrEntity, entity, options);
  }

  async find<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    entityClass: EntityTarget<Entity>,
    options?: FindManyOptions<Entity>,
  ): Promise<Entity[]> {
    return await queryRunner.manager.find(entityClass, options);
  }

  async findOne<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    entityClass: EntityTarget<Entity>,
    options: FindOneOptions<Entity>,
  ): Promise<Entity | null> {
    const result = await queryRunner.manager.findOne(entityClass, options);
    return result;
  }

  async insert<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    target: EntityTarget<Entity>,
    entity: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[],
  ): Promise<InsertResult> {
    try {
      const result = await queryRunner.manager.insert(target, entity);
      return result;
    } catch (err) {
      this.log.log(err);
    }
  }

  async update<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    target: EntityTarget<Entity>,
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | any,
    partialEntity: QueryDeepPartialEntity<Entity>,
  ): Promise<UpdateResult> {
    // console.log('끊김2', queryRunner.isReleased);
    // console.log('끊김2.1', queryRunner.isTransactionActive);
    const result = await queryRunner.manager.update(
      target,
      criteria,
      partialEntity,
    );
    // console.log(
    //   '타겟 엔티티 :  ',
    //   target,
    //   '저장되는 값',
    //   partialEntity,
    //   '끊기기 전 저장 결과는?',
    //   result,
    // );
    // console.log('끊김2.5', queryRunner.isTransactionActive);
    // console.log('끊김3', queryRunner.isReleased);
    return result;
  }

  async delete<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    targetOrEntity: EntityTarget<Entity>,
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | any,
  ): Promise<DeleteResult> {
    //
    return await queryRunner.manager.delete(targetOrEntity, criteria);
  }

  async deleteAll<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    targetOrEntity: EntityTarget<Entity>,
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | any,
  ): Promise<DeleteResult> {
    //
    return await queryRunner.manager.delete(targetOrEntity, criteria);
  }

  async query<T = any>(
    query: string,
    queryRunner?: QueryRunner,
    parameters?: any[],
  ): Promise<T> {
    //
    return await queryRunner.query(query, parameters);
  }
  //upsert<Entity extends ObjectLiteral>(target: EntityTarget<Entity>, entityOrEntities: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[], conflictPathsOrOptions: string[] | UpsertOptions<Entity>): Promise<InsertResult>;
  async upsert<Entity extends ObjectLiteral>(
    queryRunner: QueryRunner,
    target: EntityTarget<Entity>,
    entityOrEntities:
      | QueryDeepPartialEntity<Entity>
      | QueryDeepPartialEntity<Entity>[],
    conflictPathsOrOptions: string[] | UpsertOptions<Entity>,
  ) {
    return await queryRunner.manager.upsert(
      target,
      entityOrEntities,
      conflictPathsOrOptions,
    );
  }

//   async dsInsert(
//     queryRunner, //파라미터로 queryRunner를 받아옴
//   ) {
//     const queryRunner2 = this.createQueryRunner(); //파라미터와는 별개의 queryRunner 생성
//     await queryRunner2.manager.insert(ttest, { order: 10 }); //별개로 insert
//     await this.dataSource.manager.insert(ttest, { order: 100 }); //dataSource로 insert
//     await this.ttestRepository.insert({ order: 1000 }); //repository로 insert
//     await this.insert(queryRunner, ttest, { order: 10000 }); //파라미터로 받은 queryRunner로 insert
//   }

  async connectTest() {
    return await this.ttestRepository.find();
  }

  async checkConnected(input?: string) {
    let queryRunner: QueryRunner;
    if (input) {
      queryRunner = this.createQueryRunner();
      this.cc(queryRunner);
    } else {
      this.cc(queryRunner);
    }
  }
  cc(queryRunner) {
    console.log('으아아아아앙');
    console.log(queryRunner);
  }

  async dropTable<Entity>(queryRunner: QueryRunner, entityClass: Entity) {
    return await queryRunner.query(`DROP TABLE IF EXISTS ${entityClass}`);
  }
}