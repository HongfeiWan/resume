---
# Display name
title: 万宏飞

# Name pronunciation (optional)
name_pronunciation: Wan Hongfei

# Full name (for SEO)
first_name: Hongfei
last_name: Wan

# Pronouns (optional)
pronouns: ''

# Status emoji
status:
  icon: ☕️

# Is this the primary user of the site?
superuser: true

# Role/position/tagline
role: 具身智能与数据分析工程师

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: 清华大学工程物理系
    url: https://www.ep.tsinghua.edu.cn/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: brands/github
    url: https://github.com/HongfeiWan
    label: GitHub

education:
  - area: 能源动力 硕士
    institution: 清华大学工程物理系
    summary: |
      研究与工程训练覆盖实验物理探测、探测器信号处理、数据分析和工程系统建模。

work:
  - position: 灵巧手与具身智能仿真开发
    company_name: AGIMani / groot-isaaclab-simulator
    company_url: https://github.com/AGIMani/groot-isaaclab-simulator
    company_logo: ''
    date_start: 2026-01-01
    date_end: ''
    summary: |
      - 在 IsaacLab 中搭建 ROKAE xMate3 + L10 灵巧手仿真流程，支持机器人加载、相机注入、遥操作、数据回放和 IK 测试。
      - 接入 GR00T 推理服务，让机器人根据自然语言指令完成抓取任务，并围绕本地 L10 数据集构建训练、评估和动作对比流程。
      - 设计多视角数据裁剪、模态配置、action/state 表示和训练脚本，覆盖从数据准备到单卡训练调参的完整闭环。
  - position: 自动驾驶自博弈仿真与训练
    company_name: Selfrace
    company_url: https://github.com/HongfeiWan/Selfrace
    company_logo: ''
    date_start: 2025-01-01
    date_end: ''
    summary: |
      - 开发面向自动驾驶的 self-play 端到端训练/仿真项目，围绕强化学习策略训练、场景交互和闭环评估组织代码。
      - 使用 PyTorch 与 CUDA 生态搭建训练入口，关注自博弈机制在自动驾驶策略学习中的稳定性和可扩展性。
      - 整理安装、训练和文档入口，便于复现实验流程并扩展后续模型与场景。
  - position: 反应堆中微子与暗物质探测数据分析
    company_name: CDEX / DeepVibration
    company_url: https://github.com/HongfeiWan/DeepVibration
    company_logo: ''
    date_start: 2025-01-01
    date_end: 2026-12-31
    summary: |
      - CDEX 暗物质探测合作组前成员，参与反应堆中微子探测相关数据分析工作。
      - 开发 DeepVibration，用于 HPGe 探测器、NaI 反符合通道、随机触发通道与振动/温度环境量的联合分析。
      - 将 HDF5 I/O、物理 cut、参数读取、批处理、能谱绘图和环境量分析整理为可复用 Python 分析包。
      - 使用 PCA、UMAP、HDBSCAN、GMM 和 LedoitWolf/Mahalanobis 等方法构建事件特征矩阵、异常诊断和聚类解释流程。

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: 技术栈
    items:
      - name: Python
        description: 数据分析、仿真脚本、批处理流程
        percent: 90
        icon: devicon/python
      - name: PyTorch
        description: 强化学习与具身智能模型训练
        percent: 80
        icon: devicon/pytorch
      - name: IsaacLab / Simulation
        description: 机器人仿真、相机观测、动作回放与评估
        percent: 75
        icon: cube
      - name: HDF5 / ROOT
        description: 探测器数据读取、参数缓存与批量分析
        percent: 80
        icon: circle-stack
  - name: 领域能力
    items:
      - name: 具身智能
        description: 灵巧手控制、自然语言指令、模态配置与数据闭环
        percent: 85
        icon: cpu-chip
      - name: 强化学习
        description: self-play 自动驾驶训练与策略评估
        percent: 75
        icon: chart-bar
      - name: 探测器信号处理
        description: HPGe/NaI 波形、物理筛选、能谱与环境量分析
        percent: 85
        icon: beaker
      - name: 无监督数据分析
        description: UMAP、HDBSCAN、Mahalanobis 异常诊断
        percent: 80
        icon: magnifying-glass
---

清华大学工程物理系能源动力硕士，关注具身智能、自动驾驶仿真和实验探测数据分析。曾参与 CDEX 暗物质探测合作组与反应堆中微子探测数据分析，熟悉 HPGe/NaI 探测器数据、物理 cut、HDF5 批处理和无监督异常诊断；同时开发过灵巧手 IsaacLab/GR00T 仿真训练流程与 self-play 自动驾驶训练项目，习惯把复杂实验或仿真系统整理成可复现、可扩展的工程工具。
