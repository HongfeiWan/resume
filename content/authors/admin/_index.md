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
role: 具身智能训练与数据分析工程师

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
  - position: 具身智能模型微调与 RL 后训练
    company_name: AGIMani / groot-isaaclab-simulator
    company_url: https://github.com/AGIMani/groot-isaaclab-simulator
    company_logo: ''
    date_start: 2026-01-01
    date_end: ''
    summary: |
      - 基于 GR00T-N1.7-3B 和本地 L10 灵巧手多视角数据，改造官方 fine-tuning 入口与本地训练脚本，支持 projector、diffusion/DiT、bf16 和 gradient checkpointing 等训练配置。
      - 设计 full-orientation 训练数据、模态配置和 26D action/state 表示，将 eef_9d、手部 10D 和机械臂 7D target 统一到可微调、可评估的训练接口。
      - 构建 frozen GR00T/Cosmos VLM embedding 到 `z_rl` token 的 encoder-decoder 训练流程，包含 embedding cache、prefix corruption、ablation、UMAP 可视化和 checkpoint 评估。
      - 围绕 RL 后训练准备紧凑视觉语言表征与评估闭环，用 SwanLab/W&B 记录 loss、embedding/rl_token 统计、显存、吞吐和模型消融结果。
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
        description: 模型训练、数据分析、批处理流程
        percent: 90
        icon: devicon/python
      - name: PyTorch
        description: GR00T 微调、embedding autoencoder 与 RL 后训练
        percent: 80
        icon: devicon/pytorch
      - name: GR00T / IsaacLab
        description: L10 灵巧手多视角数据、模态配置与训练评估
        percent: 75
        icon: cube
      - name: HDF5 / ROOT
        description: 探测器数据读取、参数缓存与批量分析
        percent: 80
        icon: circle-stack
  - name: 领域能力
    items:
      - name: 具身智能
        description: 机器人策略微调、RL token 表征与后训练数据闭环
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

清华大学工程物理系能源动力硕士，关注具身智能模型训练、自动驾驶强化学习和实验探测数据分析。曾参与 CDEX 暗物质探测合作组与反应堆中微子探测数据分析，熟悉 HPGe/NaI 探测器数据、物理 cut、HDF5 批处理和无监督异常诊断；同时开发过 GR00T/L10 灵巧手微调、VL embedding 到 RL token 的后训练流程，以及 self-play 自动驾驶训练项目，习惯把复杂实验或训练系统整理成可复现、可扩展的工程工具。
