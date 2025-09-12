import {DependencyContainer} from 'tsyringe';
import {IPreSptLoadMod} from '@spt/models/external/IPreSptLoadMod';
import {IPostDBLoadMod} from '@spt/models/external/IPostDBLoadMod';
import {IPostSptLoadMod} from '@spt/models/external/IPostSptLoadMod';
import {ILogger} from "@spt/models/spt/utils/ILogger";
import {DatabaseServer} from '@spt/servers/DatabaseServer';
import {IDatabaseTables} from '@spt/models/spt/server/IDatabaseTables';
import {ItemHelper} from '@spt/helpers/ItemHelper';
import {CustomItemService} from '@spt/services/mod/CustomItemService';
import addExtendMagazine_9A91 from './modifies/addExtendMagazine_9A91';
import addExtendMagazine_ADAR from './modifies/addExtendMagazine_ADAR';
import addExtendMagazine_AVT40 from './modifies/addExtendMagazine_AVT40';
import addExtendMagazine_OPSKS from './modifies/addExtendMagazine_OPSKS';
import addExtendMagazine_RFB from './modifies/addExtendMagazine_RFB';
import addExtendMagazine_SAGAK545 from './modifies/addExtendMagazine_SAGAK545';
import addExtendMagazine_SAGAK545S from './modifies/addExtendMagazine_SAGAK545S';
import addExtendMagazine_SKS from './modifies/addExtendMagazine_SKS';
import addExtendMagazine_SR3M from './modifies/addExtendMagazine_SR3M';
import addExtendMagazine_SVT40 from './modifies/addExtendMagazine_SVT40';
import addExtendMagazine_TX15 from './modifies/addExtendMagazine_TX15';
import addExtendMagazine_VPO101 from './modifies/addExtendMagazine_VPO101';
import addExtendMagazine_VPO136 from './modifies/addExtendMagazine_VPO136';
import addExtendMagazine_VPO209 from './modifies/addExtendMagazine_VPO209';
import addExtendMagazine_VSK94 from './modifies/addExtendMagazine_VSK94';
import addExtendMagazine_AK12 from './modifies/addExtendMagazine_AK12';
import addExtendMagazine_AK74 from './modifies/addExtendMagazine_AK74';
import addExtendMagazine_AK74M from './modifies/addExtendMagazine_AK74M';
import addExtendMagazine_AK74N from './modifies/addExtendMagazine_AK74N';
import addExtendMagazine_AK101 from './modifies/addExtendMagazine_AK101';
import addExtendMagazine_AK102 from './modifies/addExtendMagazine_AK102';
import addExtendMagazine_AK103 from './modifies/addExtendMagazine_AK103';
import addExtendMagazine_AK104 from './modifies/addExtendMagazine_AK104';
import addExtendMagazine_AK105 from './modifies/addExtendMagazine_AK105';
import addExtendMagazine_AKM from './modifies/addExtendMagazine_AKM';
import addExtendMagazine_AKMN from './modifies/addExtendMagazine_AKMN';
import addExtendMagazine_AKMS from './modifies/addExtendMagazine_AKMS';
import addExtendMagazine_AKMSN from './modifies/addExtendMagazine_AKMSN';
import addExtendMagazine_AKS74 from './modifies/addExtendMagazine_AKS74';
import addExtendMagazine_AKS74N from './modifies/addExtendMagazine_AKS74N';
import addExtendMagazine_AKS74U from './modifies/addExtendMagazine_AKS74U';
import addExtendMagazine_AKS74UB from './modifies/addExtendMagazine_AKS74UB';
import addExtendMagazine_AKS74UN from './modifies/addExtendMagazine_AKS74UN';

// example：https://github.com/sp-tarkov/mod-examples

// mods order by https://escapefromtarkov.fandom.com/wiki/Weapons

class Mod implements IPreSptLoadMod,IPostDBLoadMod,IPostSptLoadMod {
  private logger: ILogger;
  private databaseServer: DatabaseServer;
  private itemHelper: ItemHelper;
  private customItemService: CustomItemService;

  public preSptLoad(container: DependencyContainer): void {
    this.logger = container.resolve<ILogger>('WinstonLogger');
    this.databaseServer = container.resolve<DatabaseServer>('DatabaseServer');
    this.itemHelper = container.resolve<ItemHelper>('ItemHelper');
    this.customItemService = container.resolve<CustomItemService>('CustomItemService');
  }

  public postDBLoad(container: DependencyContainer): void {
    const tables: IDatabaseTables = this.databaseServer.getTables();

    addExtendMagazine_9A91(this.logger,this.customItemService,tables);
    addExtendMagazine_ADAR(this.logger,this.customItemService,tables);
    addExtendMagazine_AVT40(this.logger,this.customItemService,tables);
    addExtendMagazine_OPSKS(this.logger,this.customItemService,tables);
    addExtendMagazine_RFB(this.logger,this.customItemService,tables);
    addExtendMagazine_SAGAK545(this.logger,this.customItemService,tables);
    addExtendMagazine_SAGAK545S(this.logger,this.customItemService,tables);
    addExtendMagazine_SKS(this.logger,this.customItemService,tables);
    addExtendMagazine_SR3M(this.logger,this.customItemService,tables);
    addExtendMagazine_SVT40(this.logger,this.customItemService,tables);
    addExtendMagazine_TX15(this.logger,this.customItemService,tables);
    addExtendMagazine_VPO101(this.logger,this.customItemService,tables);
    addExtendMagazine_VPO136(this.logger,this.customItemService,tables);
    addExtendMagazine_VPO209(this.logger,this.customItemService,tables);
    addExtendMagazine_VSK94(this.logger,this.customItemService,tables);
    addExtendMagazine_AK12(this.logger,this.customItemService,tables);
    addExtendMagazine_AK74(this.logger,this.customItemService,tables);
    addExtendMagazine_AK74M(this.logger,this.customItemService,tables);
    addExtendMagazine_AK74N(this.logger,this.customItemService,tables);
    addExtendMagazine_AK101(this.logger,this.customItemService,tables);
    addExtendMagazine_AK102(this.logger,this.customItemService,tables);
    addExtendMagazine_AK103(this.logger,this.customItemService,tables);
    addExtendMagazine_AK104(this.logger,this.customItemService,tables);
    addExtendMagazine_AK105(this.logger,this.customItemService,tables);
    addExtendMagazine_AKM(this.logger,this.customItemService,tables);
    addExtendMagazine_AKMN(this.logger,this.customItemService,tables);
    addExtendMagazine_AKMS(this.logger,this.customItemService,tables);
    addExtendMagazine_AKMSN(this.logger,this.customItemService,tables);
    addExtendMagazine_AKS74(this.logger,this.customItemService,tables);
    addExtendMagazine_AKS74N(this.logger,this.customItemService,tables);
    addExtendMagazine_AKS74U(this.logger,this.customItemService,tables);
    addExtendMagazine_AKS74UB(this.logger,this.customItemService,tables);
    addExtendMagazine_AKS74UN(this.logger,this.customItemService,tables);


    //
    this.logger.success('[SPTarkovExtendMagazine]: done');
  }

  public postSptLoad(container: DependencyContainer): void {
    //
  }
}

export const mod = new Mod();
