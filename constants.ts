import { 
  ClipboardList, 
  Search, 
  Rocket, 
  Factory, 
  ShieldCheck, 
  Award, 
  Zap, 
  Thermometer, 
  MonitorSmartphone, 
  Recycle, 
  Scale 
} from 'lucide-react';
import { PhaseStep, FocusPoint } from './types';

export const PHASES_DATA: PhaseStep[] = [
  {
    id: 1,
    title: "前期准备阶段",
    subtitle: "寻求合作模式",
    icon: ClipboardList,
    color: "bg-blue-500",
    details: [], 
    subSteps: [
      {
        title: "明确合作方与政策对标",
        description: "深入梳理项目所在地的能源及双碳政策（如省级碳达峰实施方案），明确项目是申请国家级还是省级/市级零碳试点。同时，理清政府、园区管委会与我方的合作界面。",
        visualType: 'POLICY_ALIGNMENT'
      },
      {
        title: "建立商业与盈利模型",
        description: "设计可落地的资金平衡方案。明确政府补贴渠道（如设备补贴、示范奖补）、确认项目出资主体（政府平台公司 vs 社会资本），并测算全生命周期投资回报率(IRR)。",
        visualType: 'PROFIT_MODEL'
      },
      {
        title: "确定建设服务内容",
        description: "制定“1+N”综合服务包。“1”即零碳顶层规划咨询；“N”涵盖节能技术改造、分布式光伏建设、储能配置及数字化能碳管理平台的开发与部署。",
        visualType: 'SERVICE_SCOPE'
      }
    ]
  },
  {
    id: 2,
    title: "园区调研阶段",
    subtitle: "基准摸底与碳诊断",
    icon: Search,
    color: "bg-indigo-500",
    details: [],
    subSteps: [
      {
        title: "物理边界与资产梳理",
        description: "明确园区的地理边界，统计管理权范围内的建筑、公辅系统（如供水、照明）及租户设备。",
        visualType: 'BOUNDARY_MAPPING'
      },
      {
        title: "全口径碳核算",
        description: "依据ISO14040标准进行全生命周期分析，核算包括范围一（涉及园区地理边界内受控源的直接排放，如燃气锅炉、生产工艺排放及自有车辆排放）、范围二（涵盖外购电力、热力、蒸汽或冷却产生的间接排放，是园区减排潜力最大、见效最快的领域）以及逐步纳入范围三（范围更广的供应链排放）的数据。",
        visualType: 'ISO_ACCOUNTING'
      },
      {
        title: "识别排放场景",
        description: "根据园区类型判断排放源。例如，生产制造型园区重点排放源为工业生产过程（如化工、钢铁等高耗能工艺碳排），商务办公型园区重点排放源为建筑用能与办公碳排（空调、照明、通勤等）。",
        visualType: 'EMISSION_SCENARIOS'
      },
      {
        title: "编制方案",
        description: "根据园区类型和特点，确定差异化实施路径和目标指标。生产制造型园区重点推进生产工艺低碳化改造和能源系统优化，商务办公型园区则侧重建筑节能和绿色交通。",
        visualType: 'STRATEGY_PLANNING'
      }
    ]
  },
  {
    id: 3,
    title: "试点阶段",
    subtitle: "项目试点示范",
    icon: Rocket,
    color: "bg-purple-500",
    details: [],
    subSteps: [
      {
        title: "启动标杆项目",
        description: "优先选择能耗占比大、技术改造潜力明显、管理层支持度高的企业，确保试点成效可量化、可复制、可推广。",
        visualType: 'PILOT_SELECTION'
      },
      {
        title: "对试点企业的节能改造",
        description: "根据碳诊断结果，优化试点企业的照明、空调、电机等系统，搭建屋顶/车棚光伏自发自用，同时对企业的生产工艺优化或针对企业特有系统进行升级替换（如空压、锅炉系统可替换为永磁变频、冷凝锅炉可使余热得以利用）。",
        visualType: 'PILOT_RETROFIT'
      },
      {
        title: "政策激励",
        description: "结合当地政府节能改造相关政策，出台园区级补贴政策（若有），通过资金支持和荣誉表彰激发企业参与积极性。",
        visualType: 'PILOT_POLICY'
      },
      {
        title: "效果评估和经验推广",
        description: "建立月度评估制度，跟踪关键指标（能耗下降率、碳减排量、投资回报周期），组织试点企业园区内或跨园区交流，基于试点经验编制技术方案手册和管理操作指南，形成标准化实施路径。",
        visualType: 'PILOT_EVALUATION'
      }
    ]
  },
  {
    id: 4,
    title: "全面建设阶段",
    subtitle: "能源结构重构与智能化管理",
    icon: Factory,
    color: "bg-green-600",
    details: [],
    subSteps: [
      {
        title: "新能源规模化部署",
        description: "集成园区内分布式光伏，根据可利用面积和负荷特性（建筑屋顶、露天停车场等空间），系统规划光伏装机容量，配套储能系统和智能微网，确保新能源消纳率≥95%。",
        visualType: 'CONSTRUCTION_RENEWABLES'
      },
      {
        title: "综合能源优化调度",
        description: "建立多能互补调度系统，实现交直流微电网互联和功率备用、削峰填谷、能源梯级利用，提升电能质量和整体能效。",
        visualType: 'CONSTRUCTION_SCHEDULING'
      },
      {
        title: "产业链协同和智能化改造",
        description: "建立主机厂与配套企业的余热/余压共享机制，完善充电桩网络（覆盖率≥80%），对既有智能照明、智慧空调、能效监测等实施智慧化改造，同时落实供应链碳盘查。",
        visualType: 'CONSTRUCTION_ECOSYSTEM'
      },
      {
        title: "部署能碳管理平台",
        description: "实现分项计量、实时监测、自动核算、异常预警、节能分析、碳资产管理等功能，建设集“能源监测、碳核算、预测调度”于一体的数字化底座。",
        visualType: 'CONSTRUCTION_PLATFORM'
      }
    ]
  },
  {
    id: 5,
    title: "查漏补缺阶段",
    subtitle: "碳汇整合与抵消",
    icon: ShieldCheck,
    color: "bg-orange-500",
    details: [],
    subSteps: [
      {
        title: "碳排放缺口精准测算",
        description: "完成前四阶段后，委托第三方机构开展全面碳盘查，精确核算剩余碳排放量，识别技术手段难以消除的排放源（如工艺过程排放、员工通勤排放等）。",
        visualType: 'GAP_CALCULATION'
      },
      {
        title: "生态碳汇项目开发",
        description: "根据园区及周边资源条件，规划建设林业碳汇、湿地保护、屋顶绿化、垂直绿化等项目，增强自然碳汇能力；有条件的可探索蓝碳、土壤碳汇等创新路径。",
        visualType: 'ECO_SINKS'
      },
      {
        title: "碳信用购买策略",
        description: "制定分阶段购买方案，优先选择国家核证自愿减排量(CCER)、绿色电力证书等合规产品，建议分批次采购以降低价格波动风险。",
        visualType: 'OFFSET_STRATEGY'
      }
    ]
  },
  {
    id: 6,
    title: "验收阶段",
    subtitle: "认证与长效资产运营",
    icon: Award,
    color: "bg-teal-600",
    details: [],
    subSteps: [
      {
        title: "绩效对标与认证",
        description: "根据行业权威标准（如《零碳园区评价标准》），核实近三年单位工业总产值二氧化碳排放年均下降率是否符合要求；",
        visualType: 'ACCEPTANCE_CERTIFICATION'
      },
      {
        title: "建立长效运营机制",
        description: "制定零碳园区运营管理办法，明确各部门职责，建立能碳数据定期报送、异常快速响应、设施维护保养等常态化机制。",
        visualType: 'ACCEPTANCE_MECHANISM'
      },
      {
        title: "零碳资产运营",
        description: "对新能源设施、储能系统、能碳平台等资产建立全周期管理体系，通过合同能源管理、绿电交易、碳资产交易等方式盘活零碳资产，提升项目综合效益。",
        visualType: 'ACCEPTANCE_ASSETS'
      }
    ]
  }
];

export const FOCUS_POINTS_DATA: FocusPoint[] = [
  {
    id: 1,
    title: "能源结构零碳化",
    category: "供应侧核心",
    icon: Zap,
    description: "从源头替代化石能源，构建“源网荷储”一体化的绿色能源供应体系，是实现零碳的最关键路径。",
    keyActionItems: [
      "极致绿电利用：建设不低于50%屋顶面积的光伏",
      "灵活储能配置：按装机10%-20%配置储能",
      "非电力脱碳：探索氢能等替代燃料"
    ],
    fullDetails: [
      "极致绿电利用：建设比例不低于 50% 屋顶面积的屋顶光伏。",
      "灵活储能配置：按新能源装机容量的 10%-20% 配置储能系统，以平滑分布式能源的波动性。",
      "尝试非电力领域脱碳：例如探索氢能替代，宝钢湛江钢铁建设“氢基竖炉”近零碳生产线，以氢代焦每年减碳超 50 万吨。"
    ],
    benefits: [
      "降低用能成本（峰谷套利）",
      "提高能源自给率",
      "显著减少范围二碳排放"
    ],
    chartType: 'PIE',
    chartData: [
      { name: '屋顶光伏', value: 45, color: '#81BC00' },
      { name: '风电/其他绿电', value: 15, color: '#34d399' },
      { name: '市电 (绿证)', value: 25, color: '#005094' },
      { name: '储能调节', value: 15, color: '#f59e0b' }
    ],
    visualLabel: "目标能源结构占比"
  },
  {
    id: 2,
    title: "极致能效与被动式设计",
    category: "需求侧关键",
    icon: Thermometer,
    description: "在能源生产之前，优先降低能源需求。通过建筑设计和高效设备，将能耗降至最低。",
    keyActionItems: [
      "被动式建筑：优化朝向、遮阳（75%）及绿化",
      "设备更新：淘汰落后设备，推广一级能效",
      "工艺优化：液冷技术、低温余热浓缩"
    ],
    fullDetails: [
      "被动式建筑措施：例如商务园区通过优化建筑朝向（新建园区）、设置遮阳走廊（遮阳率达75%）和立体绿化来降低空调负荷。",
      "设备更新：全面淘汰落后电机、锅炉，推广高效算力设备（针对数据中心型园区）、液冷技术、\"10度电低温余热浓缩技术\"等新技术。"
    ],
    benefits: [
      "降低设备装机容量",
      "减少初期投资成本",
      "提升室内环境舒适度"
    ],
    chartType: 'BAR',
    chartData: [
      { name: '传统园区', value: 100, color: '#94a3b8' },
      { name: '被动式设计', value: 70, color: '#60a5fa' },
      { name: '高效设备', value: 45, color: '#81BC00' },
      { name: '智能调控', value: 35, color: '#005094' }
    ],
    visualLabel: "能耗强度下降路径 (kWh/㎡)"
  },
  {
    id: 3,
    title: "数字化能碳管理平台",
    category: "技术支撑",
    icon: MonitorSmartphone,
    description: "数字化是零碳园区的大脑。利用AI和大数据技术，实现碳排放的实时监测与智能优化。",
    keyActionItems: [
      "MAOC 闭环管理",
      "数字孪生可视化",
      "智能策略控制"
    ],
    fullDetails: [
      "数字孪生可视化：利用AI和大数据分析，实现碳排放的“可测量、可报告、可验证”，使能源监测-碳核算-预测调度一体化。",
      "建立数据闭环MAOC管理制度：即核算（Measurement）、减排（Abatement）、抵消（Offset）、认证（Certificate）的闭环管理。"
    ],
    benefits: [
      "数据可测量、可报告、可验证 (MRV)",
      "运营效率提升 15%+",
      "辅助决策与合规性管理"
    ],
    chartType: 'FLOW',
    visualLabel: "MAOC 管理闭环"
  },
  {
    id: 4,
    title: "循环经济与跨企业协同",
    category: "生态优势",
    icon: Recycle,
    description: "打破企业围墙，实现物质流和能量流的梯级利用，变废为宝，构建产业共生网络。",
    keyActionItems: [
      "资源梯级利用：污水-污泥-沼气产业链",
      "余热共享：上游余热供下游使用",
      "水资源循环：高耗水行业废水零排放"
    ],
    fullDetails: [
      "资源梯级利用：构建“污水-污泥-残厨垃圾-热电联产-沼气”产业链，提高固废资源化再利用率（目标值通常设为95%）。",
      "水资源循环：推动钢铁、化工等高耗水行业实现废水“零排放”及中水回用。"
    ],
    benefits: [
      "废弃物趋零排放",
      "降低原材料采购成本",
      "增强产业链粘性"
    ],
    chartType: 'PIE', 
    chartData: [
      { name: '内部循环利用', value: 60, color: '#81BC00' },
      { name: '产业协同利用', value: 30, color: '#005094' },
      { name: '无害化填埋', value: 10, color: '#94a3b8' }
    ],
    visualLabel: "固废处理方式分布"
  },
  {
    id: 5,
    title: "政策支持与制度创新",
    category: "保障机制",
    icon: Scale,
    description: "软性机制是零碳园区持续运行的土壤。通过政策引导和绿色金融，激发企业减排内生动力。",
    keyActionItems: [
      "区域能评+碳评：从被动约束到主动规划",
      "机制激励：碳配额与碳积分",
      "绿色金融：长期低息贷款支持"
    ],
    fullDetails: [
      "\"区域能评+碳评\"制度创新：简化项目审批、强化并前置监管，实现从“被动约束”到“主动规划”。",
      "机制激励：将碳配额奖励、绿证收益纳入园区收益体系。",
      "绿色金融：争取针对零碳园区内企业政策性银行长期低息贷款来吸引优质企业入驻。"
    ],
    benefits: [
      "缩短项目落地周期",
      "解决资金瓶颈",
      "提升品牌软实力"
    ],
    chartType: 'LIST', 
    visualLabel: "政策工具箱"
  }
];
