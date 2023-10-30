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
import { assembly_rm_res } from '../reservations/entity/assemblyRmReservation.entity';

@Injectable()
export class DbcService {
  private readonly log = new Logger(DbcService.name);
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(assembly_rm_res)
    private readonly ttestRepository: Repository<assembly_rm_res>,
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
    //
    // return await queryRunner.manager.findOne(entityClass, options);
    // console.log('findOne에 쿼리 러너 죽었나요?', queryRunner.isReleased);
    // console.log('findOne - entityClass', entityClass);
    // console.log('findOne - options', options);
    const result = await queryRunner.manager.findOne(entityClass, options);
    // console.log('findOne 결과', result);
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
  async mixedTest() {
    const queryRunner = this.createQueryRunner(); //트랜젝션을 컨트롤 하기 위해 queryRunner 생성
    await queryRunner.connect();
    await queryRunner.startTransaction(); //트랜젝션 시작
    try {
      // await this.insert(queryRunner, ttest, { order: 1 });
      // await this.insert(queryRunner, ttest, { order: 2 });
      // await this.insert(queryRunner, ttest, { order: 3 });
      // await this.dsInsert(queryRunner);

      // console.log(
      //   '데이터 소스입니다',
      //   await this.dataSource.manager.find(ttest),
      // );
      // console.log('레포지토리입다', await this.ttestRepository.find());
      // console.log(
      //   '새롭게 만든 queryRunner입니다',
      //   await this.createQueryRunner().manager.find(ttest),
      // );
      // console.log(
      //   '주입받은 queryRunner입니다',
      //   await this.find(queryRunner, ttest),
      // );
      // await this.insert(queryRunner, ttest, { order: 4 });
      // await this.insert(queryRunner, ttest, { order: 5 });
      // console.log(
      //   '커밋 후 입니다',
      //   await this.createQueryRunner().manager.find(ttest),
      // );
      await queryRunner.commitTransaction(); //커밋
    } catch (err) {
      this.log.error(err);
      await queryRunner.rollbackTransaction(); //롤백
    } finally {
      await queryRunner.release();
    }
  }

  async dsInsert(
    queryRunner, //파라미터로 queryRunner를 받아옴
  ) {
    const queryRunner2 = this.createQueryRunner(); //파라미터와는 별개의 queryRunner 생성
    await queryRunner2.manager.insert(ttest, { order: 10 }); //별개로 insert
    await this.dataSource.manager.insert(ttest, { order: 100 }); //dataSource로 insert
    await this.ttestRepository.insert({ order: 1000 }); //repository로 insert
    await this.insert(queryRunner, ttest, { order: 10000 }); //파라미터로 받은 queryRunner로 insert
  }

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